import {EyeSlashIcon,ChatBubbleBottomCenterTextIcon} from "@heroicons/react/24/outline";

interface Props {
    title : string,
    description : string,
    className? : string
}

export default function EmptyList({ title , description , className } : Props) {
    return (
        <div className={`text-center border border-header border-dashed rounded-lg p-12 py-24  ${className ?? ''} w-full `}>
            {/* <EyeSlashIcon className="mx-auto h-12 w-12 text-gray-400 " /> */}
            
            <ChatBubbleBottomCenterTextIcon className="mx-auto h-12 w-12 color-header " />
            <h3 className="mt-2 text-base font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
    );
}