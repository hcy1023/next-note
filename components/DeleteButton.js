import { useFormStatus } from "react-dom";

export default function EditButton({isDraft, formAction}) {
    const {pending} = useFormStatus();

    return !isDraft && (
        <button
            className="note-editor-delete"
            disabled={pending}
            role="menuitem"
            formAction={formAction}
        >
            <img src="/cross.svg" width="14px" height="10px" alt="" role="presentation"/>
            Delete
        </button>
    )
}