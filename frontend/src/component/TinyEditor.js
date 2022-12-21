import React, {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';

export default function TinyEditor() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    selector: 'textarea#file-picker',
                    plugins: 'image code',
                    toolbar: 'undo redo | link image | code',
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    file_picker_callback: function (cb, value, meta) {
                        let input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');
                        input.onchange = function () {
                            let file = this.files[0];
                            let reader = new FileReader();
                            reader.onload = function () {
                                let id = 'blobid' + (new Date()).getTime();
                                let blobCache =  window.tinymce.activeEditor.editorUpload.blobCache;
                                let base64 = reader.result.split(',')[1];
                                let blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);
                                cb(blobInfo.blobUri(), { title: file.name });
                            };
                            reader.readAsDataURL(file);
                        };

                        input.click();
                    },
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={log}>Log editor content</button>
        </>
    );
}