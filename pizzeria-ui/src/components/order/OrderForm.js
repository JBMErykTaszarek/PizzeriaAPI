import React from 'react'
import Form from "../../layouts/Form";
import { Grid } from '@material-ui/core';
import Input from "../../controls/Input";
import Select from "../../controls/Select";


export default function OrderForm() {
    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        name="orderNumbers"
                        label="Order">
                    </Input>
                    <Select
                    label="Customr"
                    name="customerId"
                    options={[
                        //TODO implementation by WEBAPI 30:00
                    ]}>

                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <Input
                        name="orderNumbers"
                        label="Order">
                    </Input>
                </Grid>
            </Grid>
        </Form>
    )
}
