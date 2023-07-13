import React, { useCallback, useMemo, useRef, useState } from "react";

import Header from "@components/layout/Header";
import { AggridWrap, Wrap } from "@pages/Aggrid/styles";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

const Aggrid = () => {
  const gridRef = useRef<any>();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    {
      headerName: "Price",
      field: "price",
      valueFormatter: (params: any) => {
        // params.value: number
        return `£${params.value}`;
      },
    },
  ]);

  console.log("setRowData : ", setRowData);
  console.log("setColumnDefs : ", setColumnDefs);

  const context = useMemo(() => {
    return {
      discount: 0.9,
    };
  }, []);
  const getRowId = useMemo(() => {
    return (params: any) => {
      // params.data : ICar
      return params.data.make + params.data.model;
    };
  }, []);

  const onRowSelected = useCallback((event: any) => {
    // event.data: ICar | undefined
    if (event.data && event.node.isSelected()) {
      const { price } = event.data;
      // event.context: IContext
      const discountRate = event.context.discount;
      console.log("Price with 10% discount:", price * discountRate);
    }
  }, []);

  const onShowSelection = useCallback(() => {
    // api.getSelectedRows() : ICar[]
    const cars = gridRef.current;
    if (cars) {
      cars.api.getSelectedRows();
      console.log(
        "Selected cars are",
        cars.map((c: any) => `${c.make} ${c.model}`),
      );
    }
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <AggridWrap>AG-grid</AggridWrap>
        <div style={containerStyle}>
          <div className="test-container">
            <div className="test-header">
              <button type="button" onClick={onShowSelection}>
                Log Selected Cars
              </button>
            </div>
            <div style={gridStyle} className="ag-theme-alpine">
              <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                rowSelection="multiple"
                context={context}
                getRowId={getRowId}
                onRowSelected={onRowSelected}
              />
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default Aggrid;
