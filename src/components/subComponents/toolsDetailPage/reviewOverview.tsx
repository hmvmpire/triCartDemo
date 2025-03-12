import ProgressBar from "@ramonak/react-progress-bar";

export const ReviewOverview = () => {
    return (
        <div className="flex flex-col gap-y-2 mt-5 mb-10">
            <div className="flex items-center gap-x-3">
                <p className="text-sm text-blue-500">5 star</p>
                <div className="w-60">
                    <ProgressBar completed={60} isLabelVisible={false} bgColor="grey" height="10px" />
                </div>
                <p className="text-sm text-blue-500">60%</p>
            </div>
            <div className="flex items-center gap-x-3">
                <p className="text-sm text-blue-500">4 star</p>
                <div className="w-60">
                    <ProgressBar completed={30} isLabelVisible={false} bgColor="grey" height="10px" />
                </div>
                <p className="text-sm text-blue-500">30%</p>
            </div>
            <div className="flex items-center gap-x-3">
                <p className="text-sm">3 star</p>
                <div className="w-60">
                    <ProgressBar completed={0} isLabelVisible={false} bgColor="grey" height="10px" />
                </div>
                <p className="text-sm">0%</p>
            </div>
            <div className="flex items-center gap-x-3">
                <p className="text-sm">2 star</p>
                <div className="w-60">
                    <ProgressBar completed={0} isLabelVisible={false} bgColor="grey" height="10px" />
                </div>
                <p className="text-sm">0%</p>
            </div>
            <div className="flex items-center gap-x-3">
                <p className="text-sm text-blue-500">1 star</p>
                <div className="w-60">
                    <ProgressBar completed={10} isLabelVisible={false} bgColor="grey" height="10px" />
                </div>
                <p className="text-sm text-blue-500">10%</p>
            </div>
        </div>
    )
}