import React from 'react';
import CommitmentBox from '../CommitmentBox/CommitmentBox';
import img1 from "../../../../public/images/Services.jpg"
import img2 from "../../../../public/images/Services (1).jpg"
import img3 from "../../../../public/images/Services (2).jpg"

const OurCommitment = () => {
    return (
        <div className=' flex justify-evenly items-center relative top-72 my-40'>
            <CommitmentBox
                img={img1}
                heading="FREE AND FAST DELIVERY"
                article="Free delivery for all orders over $140"
            ></CommitmentBox>
            <CommitmentBox
                img={img2}
                heading="24/7 CUSTOMER SERVICE"
                article="Friendly 24/7 customer support"
            ></CommitmentBox>
            <CommitmentBox
                img={img3}
                heading="MONEY BACK GUARANTEE"
                article="We reurn money within 30 days"
            ></CommitmentBox>
        </div>
    );
};

export default OurCommitment;