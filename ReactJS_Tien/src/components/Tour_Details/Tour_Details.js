import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Tour from "../API/Tour";

import "./Tour_Details.css";
import { Link } from "react-router-dom";
import DetailCard from "./DetailCard";

function Tour_Details() {


    const [tour, setTour] = useState([])
    const [detail, setDetail] = useState([])

    const [quantityNL, setQuantityNL] = useState(0)
    const [quantityTE, setQuantityTE] = useState(0)
    const [errorslnl, setErrorSLNL] = useState(false)
    const [errorslte, setErrorSLTE] = useState(false)


    const [id, setId] = useState('')

    setInterval(Get_Id, 100);

    function Get_Id() {
      const url = window.location.href
      const valueUrl = url.split('/')
      setId(valueUrl[5])
    }

    // Lấy thông tin detail tour
    useEffect(() => {
      const url = window.location.href
      const valueUrl = url.split('/')
      const fetchData = async () => {
          const response = await Tour.Get_Detail_Tour(valueUrl[5])
          setDetail(response)
      }
        fetchData()
    }, [id])

      // Lấy thông tin tour
        useEffect(() => {
          const url = window.location.href
          const valueUrl = url.split('/')
          const fetchData = async () => {
              const response = await Tour.Get_Tour_Id(valueUrl[5])
              setTour(response)
          }
          fetchData()
      }, [id])
      
      const handler_Submit = (e) => {

        e.preventDefault()
        console.log(tour._id, tour.name, tour.price,tour.price_kid, tour.itinerary, quantityNL, quantityTE);
        var props_tours = {
          _id: tour._id,
          name: tour.name,
          price: tour.price,
          price_kid: tour.price_kid,
          itinerary: tour.itinerary,
          quantityNL: tour.quantityNL,
          quantityTE: tour.quantityTE,
        }
      }

      useEffect(() => {
        if(quantityNL > 20)
          setErrorSLNL(true)
        if(quantityNL <= 20)
          setErrorSLNL(false)
      }, [quantityNL])

      useEffect(() => {
        if(quantityTE > 20)
          setErrorSLTE(true)
        if(quantityTE <= 20)
          setErrorSLTE(false)
      }, [quantityTE])

  return (
    <div className="details">
    <div className="grids wides">
      <div className="rows">
        <div className="cols l-7 m-7 c-12">
            <div className="rows">
              <div className="image_product_details">
                  <Carousel infiniteLoop autoPlay>
                        <div className="image">
                          <img src={tour.img} alt="moblile"></img>
                        </div>
                        <div className="image">
                          <img src={tour.img1} alt="moblile"></img>
                        </div>
                        <div className="image">
                          <img src={tour.img2} alt="moblile"></img>
                        </div>
                        <div className="image">
                          <img src={tour.img3} alt="moblile"></img>
                        </div>
                  </Carousel>
              </div>
            </div>
            <div className="rows">
              <h1 className="Mota">Mô Tả:</h1>
              <p className="description">{tour.description}.</p>
            </div>
        </div>
        
        <div className="colsInfo cols l-5 m-5 c-0">
          <form action="post">
            <div className="rows">
              <h2>{tour.name}</h2>
            </div>
            <div className="rows">
              <div className="cols l-6 m-6 c-6">
                <ul className="Info_tour1">
                    <li>Giá người lớn:</li>
                    <li>Giá trẻ em:</li>
                    <li>Ngày khởi hành:</li>
                    <li>Ngày kết thúc:</li>
                    <li>Khởi hành từ:</li>
                    <li>Số lượng người lớn:</li>
                    <li>Số lượng trẻ em:</li>
                  </ul>
              </div>
              <div className="cols l-6 m-6 c-6">
                <ul className="Info_tour2">
                  <li className="li_price">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(tour.price)+ ' VNĐ'}</li>
                  <li className="li_price_kid">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(tour.price_kid)+ ' VNĐ'}</li>
                  <li>{tour.itinerary}</li>
                  <li>TP. Hồ Chí Minh</li>
                  <li>
                    <input 
                      type="number" 
                      value={quantityNL}
                      onChange={(e) => setQuantityNL(e.target.value)}
                      required
                    />
                    {
                      errorslnl && <span style={{ color: 'red' }}>Số lượng quá lớn, chúng tôi không đáp ứng xuể</span>
                    }
                  </li>
                  <li>
                    <input 
                      type="number" 
                      value={quantityTE}
                      onChange={(e) => setQuantityTE(e.target.value)}
                      required
                    />
                    {
                      errorslte && <span style={{ color: 'red' }}>Số lượng quá lớn, chúng tôi không đáp ứng xuể</span>
                    }
                  </li>
                </ul>
              </div>
            </div>
            <input type="submit" value="Đặt Tour" onClick={handler_Submit} 
            />
          </form>
        </div>
    </div>
    <div className="rows">
        <div className="cols l-12 m-12 c-12">
            <div className="related-product">
            <div>
                <h1> Tour Hot </h1>
                <DetailCard/>
            </div>
            <div className="jad"></div>
            </div>
        </div>
    </div>
  </div>
  </div>
  );
}

export default Tour_Details;
