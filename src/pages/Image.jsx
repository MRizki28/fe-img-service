import axios from "axios";
import React, { useEffect, useState } from "react";

const Image = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/images");
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <div className="text-center mt-5">
                <span className="text-2xl font-bold">Image service</span>
            </div>

            <div className="flex justify-center mt-5">
                <form action="">
                    <div className="font-normal">
                        <label htmlFor="name_file"></label>
                        <input type="file" name="name_file" id="name_file" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Image;
