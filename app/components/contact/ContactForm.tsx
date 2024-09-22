"use client"

import React from 'react'
import { Formik, getIn } from 'formik';
import * as Yup from 'yup'
import Input from '../(shared)/Input';
import { RiSendPlaneLine as RiSendPlaneLine } from '@remixicon/react';
import { Grid2 as Grid } from '@mui/material';

const ContactForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required().min(3).max(100),
        email: Yup.string().email().required(),
        subject: Yup.string().required().min(3).max(100),
        body: Yup.string().required("Message body is required").min(3, 'Min length is 3').max(1000, 'Max length is 1000'),
    })
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                body: ''
            }}
            validationSchema={validationSchema}
            onSubmit={
                (values) => {
                    console.log(values);

                }
            }
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Grid container
                        spacing={2}
                    >
                        <Grid
                            size={{ xs: 6 }}
                        >
                            <Input
                                label="Your Name"
                                fullWidth
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.name && errors?.name)}
                                helperText={Boolean(touched?.name && errors?.name) && errors?.name}
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 6 }}
                        >
                            <Input
                                label="Your Email"
                                fullWidth
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.email && errors?.email)}
                                helperText={Boolean(touched?.email && errors?.email) && errors?.email}
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12 }}
                        >
                            <Input
                                label="Subject"
                                fullWidth
                                name="subject"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.subject && errors?.subject)}
                                helperText={Boolean(touched?.subject && errors?.subject) && errors?.subject}
                                
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12 }}
                        >
                            <Input
                                label="Message"
                                fullWidth
                                multiline
                                rows={5}
                                name="body"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={Boolean(touched?.body && errors?.body)}
                                helperText={Boolean(touched?.body && errors?.body) && errors?.body}
                            />
                        </Grid>
                        <Grid
                            size={{ xs: 12 }}
                        >
                            <div>
                                <button
                                    className={isSubmitting ? "btn-secondary" : "btn-primary"}
                                    disabled={isSubmitting}
                                    type="submit"
                                    onClick={e => handleSubmit()}
                                >

                                    <span>Send Message</span>
                                    <RiSendPlaneLine
                                        size={20}
                                    />
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                )
            }
        </Formik>
    )
}

export default ContactForm