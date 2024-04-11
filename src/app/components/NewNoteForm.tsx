/** @format */
"use client";

import React, { useRef } from "react";
import createNote from "../actions/createNote";
import Button from "./Button";

export default function NewNoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await createNote(formData);
        formRef?.current.reset();
      }}
      className="flex flex-col gap-2"
      ref={formRef}
    >
      <h3 className="text-3xl font-bold">Add a note:</h3>
      <label htmlFor="title">Title</label>
      <input className="text-gray-950 rounded p-2" type="text" name="title" />
      <label htmlFor="content">Content</label>
      <input className="text-gray-950 rounded p-2" type="text" name="content" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
