import React, { useState } from "react";
import dataTinhThanh from "../data/tinh_tp.json";
import dataQuanHuyen from "../data/quan_huyen.json";
import dataContent from "../data/data.json";
import _ from "lodash";
import Chart from "react-apexcharts";

const dataMucGia = [
  { value: 1, content: "Dưới 1 triệu" },
  { value: 2, content: "1 triệu - 2 triệu" },
  { value: 3, content: "2 triệu - 3 triệu" },
  { value: 4, content: "3 triệu - 5 triệu" },
  { value: 5, content: "5 triệu - 7 triệu" },
  { value: 6, content: "7 triệu - 10 triệu" },
];
const dataDienTich = [
  { value: 1, content: "Dưới 20 m2" },
  { value: 2, content: "20 m2 - 30 m2" },
  { value: 3, content: "30 m2 - 50 m2" },
  { value: 4, content: "50 m2 - 60 m2" },
  { value: 5, content: "60 m2 - 70 m2" },
  { value: 6, content: "70 m2 - 80 m2" },
];


export default function Home() {
    const[dataChart,setDataChart] = useState({
        series: [
          {
            data: [
              {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33],
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11],
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65],
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24],
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47],
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31],
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02],
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02],
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01],
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02],
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91],
              },
              {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612],
              },
              {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612],
              },
              {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95],
              },
              {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67],
              },
              {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4],
              },
              {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9],
              },
              {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45],
              },
              {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35],
              },
              {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53],
              },
              {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19],
              },
              {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620],
              },
              {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620],
              },
              {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61],
              },
              {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58],
              },
              {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86],
              },
              {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16],
              },
              {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4],
              },
              {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81],
              },
              {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578],
              },
              {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579],
              },
              {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96],
              },
              {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92],
              },
              {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22],
              },
              {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08],
              },
              {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25],
              },
              {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97],
              },
              {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602],
              },
              {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95],
              },
              {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02],
              },
              {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591],
              },
              {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592],
              },
              {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34],
              },
              {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86],
              },
              {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01],
              },
              {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25],
              },
              {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99],
              },
              {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81],
              },
              {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96],
              },
              {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39],
              },
              {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27],
              },
              {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55],
              },
              {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02],
              },
              {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01],
              },
              {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06],
              },
              {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89],
              },
              {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5],
              },
              {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86],
              },
              {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07],
              },
              {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606],
              },
            ],
          },
        ],
        options: {
          chart: {
            type: "candlestick",
            height: 350,
          },
          title: {
            text: "CandleStick Chart",
            align: "left",
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
        },
      })


  const [listNha, setListNha] = useState(dataContent);
  const [state, setState] = useState({
    tinhThanh: "",
    quanHuyen: "",
    mucGia: "",
    dienTich: "",
  });


  const renderTinhThanh = () => {
    return _.sortBy(Object.values(dataTinhThanh), (item) => item.name).map(
      (item, index) => {
        return (
          <option key={index} value={item.code}>
            {item.name}
          </option>
        );
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };
  const renderQuanHuyen = () => {
    const listQuanHuyen = Object.values(dataQuanHuyen).filter(
      (item) => item.parent_code === state.tinhThanh
    );

    return listQuanHuyen.map((item, index) => {
      return (
        <option key={index} value={item.code}>
          {item.name_with_type}
        </option>
      );
    });
  };

  const renderMucGia = () => {
    return dataMucGia.map((item, index) => {
      return (
        <option key={index} value={item.value}>
          {item.content}
        </option>
      );
    });
  };
  const renderDienTich = () => {
    return dataDienTich.map((item, index) => {
      return (
        <option key={index} value={item.value}>
          {item.content}
        </option>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [];
    newList = dataContent
      .filter((item) => state.tinhThanh === "" || item.city === state.tinhThanh)
      .filter(
        (item) => state.quanHuyen === "" || item.district === state.quanHuyen
      )
      .filter((item) => {
        if (state.mucGia === "") {
          return true;
        } else if (state.mucGia == 1) {
          return item.price <= 1000000;
        } else if (state.mucGia == 2) {
          return item.price > 1000000 && item.price <= 2000000;
        } else if (state.mucGia == 3) {
          return item.price > 2000000 && item.price <= 3000000;
        } else if (state.mucGia == 4) {
          return item.price > 4000000 && item.price <= 5000000;
        } else if (state.mucGia == 5) {
          return item.price > 5000000 && item.price <= 7000000;
        } else if (state.mucGia == 6) {
          return item.price > 7000000 && item.price <= 10000000;
        }
      })

      .filter((item) => {
        if (state.dienTich === "") {
          return true;
        } else if (state.dienTich == 1) {
          return item.area <= 20;
        } else if (state.dienTich == 2) {
          return item.area > 20 && item.area <= 30;
        } else if (state.dienTich == 3) {
          return item.area > 30 && item.area <= 50;
        } else if (state.dienTich == 4) {
          return item.area > 50 && item.area <= 60;
        } else if (state.dienTich == 5) {
          return item.area > 60 && item.area <= 70;
        } else if (state.dienTich == 6) {
          return item.area > 70 && item.area <= 80;
        }
      });
    setListNha(newList);
  };
  return (
    <div className="mt-4">
      <form
        className="p-4"
        style={{
          backgroundColor: "rgb(255 154 0 /50%)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <h5>Tỉnh Thành</h5>
          <select
            name="tinhThanh"
            className="group-control"
            onChange={handleChange}
          >
            <option value="">--Chọn Tỉnh Thành--</option>
            {renderTinhThanh()}
          </select>
        </div>
        <div>
          <h5>Quận Huyện</h5>
          <select
            name="quanHuyen"
            className="group-control"
            onChange={handleChange}
          >
            <option value="">--Chọn Quận Huyện--</option>
            {renderQuanHuyen()}
          </select>
        </div>
        <div>
          <h5>Mức Giá</h5>
          <select
            name="mucGia"
            className="group-control"
            onChange={handleChange}
          >
            <option value="">--Chọn Mức Giá--</option>
            {renderMucGia()}
          </select>
        </div>
        <div>
          <h5>Diện Tích</h5>
          <select
            name="dienTich"
            className="group-control"
            onChange={handleChange}
          >
            <option value="">--Chọn Diện Tích--</option>
            {renderDienTich()}
          </select>
        </div>
        <button
          className="btn py-3 px-5"
          style={{ backgroundColor: "rgb(255 154 0 /80%)" }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <div className="mt-4">
        {listNha.map((item, index) => {
          return (
            <div
              className="py-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="image px-3">
                <img
                  width={250}
                  height={200}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="conten">
                <h4 style={{ color: "red" }}>{item.title}</h4>
                <h4 style={{ color: "green" }}>
                  {item.price / 1000000} triệu/tháng
                </h4>
                <p>
                  Diện Tích:{" "}
                  <span style={{ fontWeight: "bold", marginRight: 20 }}>
                    {item.area}m2
                  </span>{" "}
                  Khu vực:{" "}
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    {dataQuanHuyen[item.district].path_with_type}
                  </span>
                </p>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div id="chart" className="my-5">
        <Chart   
          options={dataChart.options}
          series={dataChart.series}
          type="candlestick"
          height={350}
        />
       
      </div>
    </div>
  );
}
