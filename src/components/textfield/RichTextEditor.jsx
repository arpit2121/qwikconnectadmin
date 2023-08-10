import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'

const RichTextEditor = () => {
    const editor = useRef();
    const [content, setContent] = useState();
  return (
    <div>
        <JoditEditor
        ref={editor}
        value={content}
        onChange={newContent=>setContent(newContent)}
        />
    </div>
  )
}

export default RichTextEditor