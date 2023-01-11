import React from "react";
import downloadIcon from '../assets/img/file-download-import-icon.svg';

const pdf = '../../../public/Resume2.pdf';

export const PDF = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = pdf;
                alink.click();
            })
        })
    }
    return (
        <>
         
                <a onClick={onButtonClick}><img src={downloadIcon} alt="" /></a>

        </>
    );
};
  
