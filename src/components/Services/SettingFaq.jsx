import { SearchOffOutlined } from '@mui/icons-material'
import React from 'react'
import Catelogfaqquestion from '../Catalogue/Catelogfaqquestion'
import '../Catalogue/catalogue.css'
import SearchIcon from '@mui/icons-material/Search';
export default function SettingFaq() {
  return (
    <div >
        <div style={{margin:"auto",marginBottom:"5vw"}} className="cafaqcontainer">
        <div className="catefaqhead">FAQS</div>
        <div className="catefaqheadname">Frequently asked questions</div>
        <div className="catefaqheadhaveq">
          Have questioners? we're here to help
        </div>
        <div className="catesearchboxfaq">
          <span>
            <SearchIcon
              style={{ margin: "0vw 0.81vw", fontSize: "1.7vw" }}
            />
          </span>
          <input type="text" />
        </div>
        <Catelogfaqquestion />
        <Catelogfaqquestion />
        <Catelogfaqquestion />
        <Catelogfaqquestion />
        <Catelogfaqquestion />
        <Catelogfaqquestion />
      </div>
    </div>
  )
}
