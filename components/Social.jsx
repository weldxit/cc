import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";

const Social = () => {
    const shareUrl = "https://www.chasicare.com/biofloc-fish-farming-in-odisha-chasicare-blog/"
    return (
        <div>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} />
            </FacebookShareButton>&nbsp;&nbsp;
            <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} />
            </LinkedinShareButton>&nbsp;&nbsp;
            <EmailShareButton url={shareUrl}>
                <EmailIcon size={40} />
            </EmailShareButton>&nbsp;&nbsp;
            <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={40} />
            </TelegramShareButton>&nbsp;&nbsp;
            <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40} />
            </WhatsappShareButton>&nbsp;&nbsp;
            <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} />
            </TwitterShareButton>
        </div>
    )
}

export default Social