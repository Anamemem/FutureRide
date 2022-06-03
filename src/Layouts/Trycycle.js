import React, { useEffect, useState } from 'react'
// import { useState } from "react";

// import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid'
import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import "../App.css"
// import  NewCategory  from './newCatgory'
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom'
import { createOrderService, getOrder, updateOrderService } from '../services/driver';
import { FaTimes } from 'react-icons/fa';

let activeOrder = {}
let timeHandler

const clearTimer = () => {
  console.log("moun i s cdls")
  if (timeHandler) {   
    clearTimeout(timeHandler)
  }
}

const AddNewCategory = ({ open, close, ...props }) => {

  const [loading, setLoading] = useState({ order: false, driver: false, cancle: false })
  const navigate = useNavigate()
  let counter = 0


  const awaitingDriver = () => {
    setLoading(val => ({ ...val, driver: true }))
    timeHandler = setTimeout(() => {
      if (counter >= 20) {
        setLoading(val => ({ ...val, driver: false, failed: true }))
      }
      getOrder({ id: activeOrder?._id }).then((response) => {
        
        if (response?.[0]?.driver?._id) {
          setLoading()
          navigate(`../order/${response[0]._id}`)
        } else {
          awaitingDriver()
        }
      }).catch(e => {
        console.log("awaiting friver", e)
      }).finally(() => {
        counter++
      })
    }, 1000)

  }

  const cancleRide = () => {
    if (!activeOrder?._id) {
      handleClose()
      setLoading(val => ({ ...val, cancle: false,failed:false }))
    }
    setLoading(val => ({ ...val, cancle: true }))
    updateOrderService(activeOrder._id, { status: "cancled" }).catch(e => {
      console.log("failed to cancle order")
      clearTimer()
    }).finally(() => {
      setLoading(val => ({ ...val, cancle: false,failed:false }))
      handleClose()
    })
  }

  const placeOrder = () => {
    setLoading(val => ({ ...val, order: true }))
    const data = {
      pickUp: props.pickUp,
      destination: props.destination,
      price: props.price * (props.distance || 0),
      distance: props.distance || 0,
      category: "6296f67b1bbb184f0fb6cf81"
    }
    createOrderService(data).then((response) => {
      activeOrder = response.data
      setLoading(val => ({ ...val, order: false }))
      awaitingDriver()
    }).catch(e => {
      setLoading(val => ({ ...val, order: false, failed: true }))
    })
  }

  const handleClose = (_, reason) => {
    if (reason !== "backdropClick") {
      clearTimer()
      setLoading({order: false, driver: false, cancle: false,failed:false })
      close()
    }
  }


  useEffect(() => {
    return clearTimer
  }, [])

  return (

    <div>
      <Dialog
        open={open}
        disableEscapeKeyDown
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <Grid item xs={12} >
          <Card >
            <CardContent sx={{ width: 300, justifyContent: "center" }} style={{
              fontFamily: 'Poppins ', fontSize: '12.5px'
            }} >
              <hr />
              {
                loading.order
                  ? <>
                    <Typography fontWeight={"800"}> Creating Order...</Typography>
                  </>
                  : loading.cancle
                    ? <>
                      <Typography fontWeight={"800"}> Canceling Ride...</Typography>
                    </>
                    : loading.driver
                      ? <Stack>
                        <Typography fontWeight={"800"}> Awaiting Driver... </Typography>
                        <Box>
                        <IconButton onClick={cancleRide}> <FaTimes /> </IconButton>
                        </Box>
                      </Stack>
                      : loading.failed
                        ? <Stack>
                          <Typography fontWeight={"800"}> Failed to get Driver </Typography>
                          <IconButton onClick={cancleRide}> <FaTimes /> </IconButton>
                        </Stack>
                        : <>
                          <Stack
                            direction="row"
                            justifyContent="flex-end"
                          >   <CloseIcon onClick={close} style={{ cursor: "pointer" }} /></Stack>
                          <Grid container>
                            <Grid item xs={9} md={10}>
                              <h3>Seats</h3>
                              <h3>Minimum price</h3>
                              <h3>Distance</h3>
                              <h3>Estimated Time</h3>
                              <h3>Price</h3>
                              <h3>Payment</h3>
                            </Grid>
                            <Grid item xs={3} md={2}>
                              <h3>1-4</h3>
                              <h3>#{props.price} </h3>
                              <h3>{props.distance || 0}Km </h3>
                              <h3>{props.time || 0}min </h3>
                              <h3>#{props.price * props.distance || 0}</h3>
                              <h3>Cash</h3>
                            </Grid>
                          </Grid>
                          <Link to='/driversprofile'>

                            <button className='eat'  >Request Trycycle</button>
                          </Link>
                          <Button fullWidth variant='contained' onClick={placeOrder}> Request {props.title}</Button>
                        </>
              }

            </CardContent>

          </Card>
        </Grid>

        {/* <NewCategory
            open={newCategory}
            close={() => setNewCategory(false)}
            /> */}
      </Dialog>
    </div>
  )
};



export default AddNewCategory;
