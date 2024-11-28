/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Data from "../data/cars-data";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import inputFieldData from "../data/inputFieldData.json";

function Search() {
    const [condition, setCondition] = useState();
    const [maker, setMaker] = useState();
    const [price, setPrice] = useState();
    const [segment , setSegment] = useState();
    const navigate = useNavigate();

    const makers = inputFieldData.inputFields.find(field => field.name === "maker")?.options
    const conditions = inputFieldData.inputFields.find(field => field.name === "condition")?.options
    const segments = inputFieldData.inputFields.find(field => field.name === "type")?.options

    console.log(segments , makers)
    const handleSearch = () => {
        const params = new URLSearchParams();

        if (condition) params.append("condition", condition);
        if (maker) params.append("maker", maker);
        if (price) params.append("price", price);
        if (segment) params.append("segment", segment);
        
        if (params.toString()) {
            navigate(`/search?${params.toString()}`); 
          } else {
            document.querySelector(".addborder").classList.add("border-2", "border-blue-400");
          }
    };

    return (
        <div className="addborder flex flex-col md:flex-row md:w-[80%] xl:w-[60%] gap-4 p-2 shadow-md bg-white md:rounded-full items-center w-fit rounded-xl mt-2">
            <Select onValueChange={value => setCondition(value)}>
                <SelectTrigger className="w-[180px] border-none shadow-none hover:bg-zinc-100 rounded-full grow">
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
                    {conditions.map((car, index) => (
                        <SelectItem key={index} value={car}>
                            {car}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            
            <Select onValueChange={value => setMaker(value)}>
                <SelectTrigger className="w-[180px] border-none shadow-none hover:bg-zinc-100 rounded-full grow">
                    <SelectValue placeholder="Car-Maker" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
                    {makers.map((carMaker, index) => (
                        <SelectItem key={index} value={carMaker}>
                            {carMaker}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={value => setSegment(value)}>
                <SelectTrigger className="w-[180px] border-none shadow-none hover:bg-zinc-100 rounded-full grow">
                    <SelectValue placeholder="Segment" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
                    {segments.map((segment , index) => (
                        <SelectItem key={index} value={segment}>
                            {segment}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>


            <Select onValueChange={value => setPrice(value)}>
                <SelectTrigger className="w-[180px] border-none shadow-none hover:bg-zinc-100 rounded-full grow">
                    <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
                    {Data.pricing.map((car) => (
                        <SelectItem key={car.id} value={car.range}>
                            {car.range}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <IoIosSearch
                onClick={handleSearch}
                className="md:size-8 w-full h-6 bg-blue-600 text-white rounded-full hover:scale-125 cursor-pointer transition-all duration-150 p-1"
            />
        </div>
    );
}

export default Search;
