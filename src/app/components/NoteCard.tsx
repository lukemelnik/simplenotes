/** @format */

"use client";

import React from "react";
import deleteNote from "../actions/deleteNote";

type NoteProps = {
  note: {
    id: number;
    title: string;
    content: string;
  };
};

export default function NoteCard({ note }: NoteProps) {
  return (
    <div
      key={note.id}
      className="bg-gray-300 text-gray-800 rounded-xl p-8 relative"
    >
      <button
        onClick={() => deleteNote(note.id)}
        className="text-xl font-bold absolute right-5 top-5 hover:text-red-600"
      >
        X
      </button>
      <h3 className="font-bold text-lg">{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
}
