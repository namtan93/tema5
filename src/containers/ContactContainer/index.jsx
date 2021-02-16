import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';


import SiteNavigation from '../../components/SiteNavigation';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import Form from '../../components/Form';


function ContactContainer() {
    const [dataPage, setDataPage] = useState(null);
    
    useEffect(() => {
        const client = new Cosmic();
        const bucket  = client.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });
        bucket.getObject({
            slug: 'contact-us',
            props: 'title,slug,content'
        })
        .then(data => {
            setDataPage(data.object);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    
    const  renderSkeleton = () => {
        return (
            <p>Laster data...</p>
        )
    };

    const renderPage = () => {
        return (
            <>
                <SiteNavigation />
                <Container as="main">
                    <PageTitle>Contact</PageTitle>
                    <div dangerouslySetInnerHTML={{__html:dataPage.content}} />
                    <Form /> 
                </Container>
            </>
        )
    };


    return (
        <>
             {(dataPage === null) ? renderSkeleton() : renderPage()}
           
            
        </>
    )
}

export default ContactContainer;
