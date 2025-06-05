import React from "react";

export default function ExpertFilter() {
  return (
    <div>
      <div className="expertfiltertypename">Categories</div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark1">
          <input type="checkbox" id="checkmark1" />
          Digital Marketing
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark2">
          <input type="checkbox" id="checkmark2" />
          Graphic Design
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark3">
          <input type="checkbox" id="checkmark3" />
          Data Analystics
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label  className="checkmarkforfiltertype"htmlFor="checkmark4">
          <input type="checkbox" id="checkmark4" />
          Communication
        </label>
      </div>
      <div className="expertfiltertypename">Course Length</div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark5">
          <input type="checkbox" id="checkmark5" />
          Under 2 hours
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark6">
          <input type="checkbox" id="checkmark6" />
          2-10 hours        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark7">
          <input type="checkbox" id="checkmark7" />
          11-20 hours
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype"htmlFor="checkmark8">
          <input type="checkbox" id="checkmark8" />
          20+ hours
        </label>
      </div>
      <div className="expertfiltertypename">Certification</div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype"htmlFor="checkmark9">
          <input type="checkbox" id="checkmark9" />
          Paid Certification
        </label>
      </div>

      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark10">
          <input type="checkbox" id="checkmark10" />
          Free Certification
        </label>
      </div>
      <div className="expertfiltertypename">Course Difficulty</div>
      <div className="checkmarkforfiltertype">
        <label  className="checkmarkforfiltertype"htmlFor="checkmark11">
          <input type="checkbox" id="checkmark11" />
          Begineer
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label  className="checkmarkforfiltertype"htmlFor="checkmark12">
          <input type="checkbox" id="checkmark12" />
          Intermediate
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype"htmlFor="checkmark13">
          <input type="checkbox" id="checkmark13" />
          Advanced
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype"htmlFor="checkmark14">
          <input type="checkbox" id="checkmark14" />
          Expert
        </label>
      </div>
      <div className="expertfiltertypename"> Course Provider</div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype"htmlFor="checkmark15">
          <input type="checkbox" id="checkmark15" />
          Google
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype"htmlFor="checkmark16">
          <input type="checkbox" id="checkmark16" />
          Udemy
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype"htmlFor="checkmark17">
          <input type="checkbox" id="checkmark17" />
          Coursera
        </label>
      </div>
      <div className="checkmarkforfiltertype">
        <label className="checkmarkforfiltertype" htmlFor="checkmark18">
          <input type="checkbox" id="checkmark18" />
          Future Learn
        </label>
      </div>
    </div>
  );
}
