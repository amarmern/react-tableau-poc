import React, { useEffect, useRef, useState } from 'react';

const { tableau } = window

const TableauEmbed = (props) =>{
    const [url] = useState(
        "https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
      );
      const ref = useRef(null);

      const options = {
          device: 'desktop'
      }

      const initViz = () => {
          new tableau.Viz(ref.current, url,options)
      }

      useEffect(initViz,[]);

      return (
          <div>
              {/* <h1>{props.location.state.title}</h1> */}
              <div style={setVizStyle} ref={ref} />
          </div>
      )
}
const setVizStyle = {
    width: "800px",
    height: "700px",
  };
export default TableauEmbed