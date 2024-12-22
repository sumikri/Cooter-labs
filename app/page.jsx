'use client'

import Choice from "@/components/form/Choice";
import MultiChoice from "@/components/form/MultiChoice";
import TextField from "@/components/form/TextField";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Chip from "@/components/ui/Chip";
import IconButton from "@/components/ui/IconButton";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [selectedValue, setselectedValue] = useState('1')

  const handleChange = (value) => {
    setselectedValue(value)
  }

  return (
    <div>
      <h1 className="">Welcome to cooter labs</h1>
      <ButtonPrimary />
      <Chip />
      <IconButton />
      <MultiChoice />
      <form action="" method="get">

        <Choice selectedValue={selectedValue} onChange={handleChange} label="Choice" value="1" id="choice1" name="choice" defaultChecked />
        <Choice selectedValue={selectedValue} onChange={handleChange} label="Choice" value="2" id="choice2" name="choice" />
        <Choice selectedValue={selectedValue} onChange={handleChange} label="Choice" value="3" id="choice3" name="choice" />
        <Choice selectedValue={selectedValue} onChange={handleChange} label="Choice" value="4" id="choice4" name="choice" />
      </form>
      <TextField placeholder={'Enter your name'}/>
    </div>
  );
}
