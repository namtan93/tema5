import React, { useState, useEffect, useRef } from 'react';
import Cosmic from 'cosmicjs';
import Mapbox from 'mapbox-gl';


import Chart from '../Chart';
import SiteNavigation from '../../components/SiteNavigation';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';



let map = null;

function HomeContainer() {
    const [pageData, setPageData] = useState(null);
    const [blogData, setBlogData] = useState(null);

    Mapbox.accessToken = process.env.MAPBOX_API_KEY;
    const mapElement = useRef(null);

    /*Hente dataene/informasjon fra Cosmic */
    useEffect(() => {
        const client = new Cosmic();
        const bucket  = client.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });
        bucket.getObjects({
            slug: 'hjem',
            props: 'title,slug,content',
        })
        .then(data => {
            setPageData(data);
        })
        .catch(error => {
            console.log(error);
        })

        //Hente metadataene
        bucket.getObjects({
            type: 'blog-posts',
            limit: 5,
            props: 'slug,title,content,metadata',
            sort: '-created_at'
        })
        .then(data => {
            setBlogData(data.objects);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    /*Hente kart fra Mapbox */
    useEffect(() => {
        if (pageData !== null) {
            map = new Mapbox.Map({
              container: mapElement.current,
              style: 'mapbox://styles/mapbox/streets-v11',
              center: [10.7573020394238, 59.913234889448916],
              zoom: 11.2
            });
        }    
    }, [pageData]);

    /*Legge til markører og popup info i kartet  */
    useEffect(() => {
        if (blogData !== null) {
            blogData.map((item) => {
               new Mapbox.Marker({
                   color: '#34435E'
               })
                .setLngLat(item.metadata.coordinate)
                .setPopup(new Mapbox.Popup().setHTML(`
                <div class="popup">
                    <h2>${item.title}</h2>
                    <img src="${item.metadata.image.imgix_url}" alt="${item.metadata.alttext}">
                    <a href="/blogs/${item.slug}">More info...</a>
                </div>
                `))
                .addTo(map); 
            });
        }
    }, [blogData]);
  

    const renderSkeleton = () => {
        return (
            <>
            <p>Laster data...</p>
            </>
        )
    };

    const renderPage = () => {
        return (
            <>
                <SiteNavigation />
                <Container as="main">
                    <PageTitle>The most famous places you should visit in Oslo:</PageTitle>
                    <div dangerouslySetInnerHTML={{__html: pageData.content}} />
                    <div style={{height:"500px", maxWidth:'80%', margin:'0 auto', border:'3px solid #A8DCD9', padding:'20px', marginBottom:'40px' }} ref={mapElement} />
                    <Chart/>
                </Container>
            </>
        )
    };
    
    return(
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    );
};



export default HomeContainer;
