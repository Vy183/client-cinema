import React from "react";
import SlickBanner from "../SlickBanner/SlickBanner";
import TabBar from "../TabBar/TabBar";
import Review from "../Review/Review";

const HomePage = (props) => {
    return (
        <>
            <SlickBanner />
            <TabBar />
            <Review />
        </>
    );
};

export default HomePage;
