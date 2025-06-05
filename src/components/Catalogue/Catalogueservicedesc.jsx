import React from "react";

export const Catalogueservicedesc = ({ data, width }) => {
  return (
    <>
      {data?.serviceName1 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName1}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice1}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays1}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
              {width > 700 ? data?.whatInclude1 : data?.whatInclude1.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName2 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName2}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice2}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays2}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
                 {width > 700 ? data?.whatInclude2 : data?.whatInclude2.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName3 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName3}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice3}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays3}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
                {width > 700 ? data?.whatInclude3 : data?.whatInclude3.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName4 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName4}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice4}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays4}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
                 {width > 700 ? data?.whatInclude4 : data?.whatInclude4.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName5 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName5}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice5}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays5}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
                {width > 700 ? data?.whatInclude5 : data?.whatInclude5.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName6 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName6}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice6}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays6}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
                 {width > 700 ? data?.whatInclude6 : data?.whatInclude6.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName7 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName7}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice7}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays7}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
                {width > 700 ? data?.whatInclude7 : data?.whatInclude7.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName8 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName8}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice8}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays8}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
               {width > 700 ? data?.whatInclude9 : data?.whatInclude9.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName9 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName9}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice9}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays9}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
                 {width > 700 ? data?.whatInclude9 : data?.whatInclude9.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName10 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName10}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice10}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays10}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
             {width > 700 ? data?.whatInclude10 : data?.whatInclude10.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName11 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName11}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice11}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays11}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
             {width > 700 ? data?.whatInclude11 : data?.whatInclude11.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName12 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName12}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice12}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays12}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
               {width > 700 ? data?.whatInclude12 : data?.whatInclude12.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName13 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceName13}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.servicePrice13}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxx">
              {data?.serviceDays13}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxx"
            >
                {width > 700 ? data?.whatInclude13 : data?.whatInclude13.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName14 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName14}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice14}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays14}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
                {width > 700 ? data?.whatInclude14 : data?.whatInclude14.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {data?.serviceName15 ? (
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceName15}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.servicePrice15}
            </div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">
              {data?.serviceDays15}
            </div>
            <div
              style={{ width: "52vw" }}
              className="catlogwhatincludedboxvaluesnoboxxx"
            >
             {width > 700 ? data?.whatInclude15 : data?.whatInclude15.slice(0,18)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
