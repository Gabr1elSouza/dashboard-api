import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";

const SparkLine = ({ color, id, height, width, data, type, currentColor }) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="y"
        type={type}
        tooltipSettings={{
          visible: true,
          format: "${x} : data ${y}",
          trackLineSettings: {
            visible: true,
            color: "#fc5070",
            width: 2,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  );
};

export default SparkLine;
