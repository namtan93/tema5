import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Chart() {
    const [chartState, setChartState] = useState({
        data: [{
            x: [
                'Individual visits',
                'Visitors in groups',
                'Paying visitors',
                'Total visitior'],
            y: [
                8211916, 
                2221385, 
                5471291, 
                10433301],
            type: 'bar',
            marker: {color: 'rgb(142,124,195'}
        }],
        layout: {
            width: 700,
            height: 350,
            title: 'Museums Visitors 2019'
        }
    });

    return(
        <>
        <Plot
            data={chartState.data}
            layout={chartState.layout}        
            frames={chartState.frames}
            config={chartState.config}
            onInitialized={(figure) => chartState.setChartState(figure)}
            onUpdate={(figure) => chartState.setChartState(figure)}
        />
        </>
    )
}

export default Chart;