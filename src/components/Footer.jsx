import React from "react";

function Footer() {
    {/*Copyright Footer Text With Auto Updating Year Text*/}
    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Mark Howard. All rights reserved.
            </p>
        </div>
    )
}

export default Footer