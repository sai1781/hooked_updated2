import { Stack } from '@mui/material'
import { useState, useEffect } from 'react';
import { Req } from '../utils'
import { Typography } from '@mui/material';
import * as React from 'react';
import Favourite from './Favourite';
import Masonry from '@mui/lab/Masonry';



const Nav = _ => {
    const [list, setList] = useState("");
    const [clicked, setClicked] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [value, setValue] = useState("");


    useEffect(_ => {
        if (value !== undefined) {
            (async _ => {
                const response = await Req.get(`?s=${value}`);
                if (response.data.Response === "True") {
                    setList(response.data.Search)
                    setTrigger(true);
                } else {
                    setTrigger(false);
                }
            })()
         }
           //eslint-disable-next-line react-hooks/exhaustive-deps


    }, [clicked, value])


    // console.log(clicked);

    // useEffect(_ =>{
    //     if(trigger === false){
    //     setTimeout(_ =>{
    //         setClicked(false);
    //         console.log("button trigger")
    //     }, 5000)
    // }
    // }, [clicked])

    const input = e => {
        const input_value = e.target.value;
        setValue(input_value);
    }
    const submit_input = _ => {
        if (value !== "") {
            setClicked(true);
            setTimeout(_ => {
                setClicked(false);

            }, 5000)
        }
    }
    return (
        <>
            {trigger === "false" && clicked === "true" ? console.log("trigger") : " "}
            <Stack className="Top" >
                <Typography variant="v6" color="white" >Hooked</Typography>
            </Stack>
            <Stack direction="row" className="searchNav" >
                <input type="text" onKeyUp={input} placeholder="search your Movie names here" />
                <button onClick={submit_input} >Search</button>
            </Stack>
            <p className={trigger === false && clicked === true ? "notfound" : "notfound none"}>Not found</p>

            <hr />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <Masonry columns={4} spacing={4} >

                    {trigger === true ?
                        list.map((data, idx) => {
                            return (
                                <Favourite key={idx} data={data} />
                            )
                        })
                        : ("")}
                </Masonry>
            </div>

        </>
    )

}

export default Nav;