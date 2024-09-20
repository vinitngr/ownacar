/* eslint-disable no-unused-vars */
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Data from "./data/cars-data";
import { IoIosSearch } from "react-icons/io";
function Search() {
    return (
        <div className="flex gap-4 p-2 shadow-md bg-white rounded-full items-center w-[90vw] xl:w-[700px] mt-2">
            <Select>
                <SelectTrigger className="w-[180px] border-none shadow-none hover:bg-zinc-100 rounded-full grow ">
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
                    {Data.type.map((car, index) => (
                        <SelectItem key={index} value={car.type}>
                            {car.type}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px] border-none shadow-none hover:bg-zinc-100 rounded-full grow ">
                    <SelectValue placeholder="Car-Maker" />
                </SelectTrigger>

                <SelectContent className="bg-white border-none">
                    {Data.carMakers.map((carMaker) => (
                        <SelectItem key={carMaker.id} value={carMaker.name}>
                            {carMaker.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
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

            <IoIosSearch className="size-8 bg-blue-600 text-white rounded-full hover:scale-125 cursor-pointer transition-all duration-150 p-1" />
        </div>
    );
}

export default Search;