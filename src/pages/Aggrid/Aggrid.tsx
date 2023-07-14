import React, { useCallback, useMemo, useRef, useState } from "react";

import Header from "@components/layout/Header";
import { AggridWrap, Wrap } from "@pages/Aggrid/styles";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css";

const Aggrid = () => {
  const gridRef = useRef<any>();

  const contains = (str: string, substr: string): boolean =>
    str.includes(substr);

  interface makeAliases {
    [key: string]: string;
  }

  const makeFilterParams = {
    filterOptions: ["contains"],
    textMatcher: ({
      value,
      filterText,
    }: {
      value: string;
      filterText: string | undefined;
    }): boolean => {
      const aliases: makeAliases = {
        usa: "united states",
        holland: "netherlands",
        niall: "ireland",
        sean: "south africa",
        alberto: "mexico",
        john: "australia",
        xi: "china",
      };
      const literalMatch = contains(value, filterText || "");
      return !!literalMatch || !!contains(value, aliases[filterText || ""]);
    },
    trimInput: true,
    debounceMs: 1000,
  };

  const containerStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
    }),
    [],
  );
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      headerName: "Make",
      field: "make",
      sortable: true,
      filterParams: makeFilterParams,
    },
    {
      headerName: "Model",
      field: "model",
      sortable: true,
      checkboxSelection: true,
    },
    {
      headerName: "Price",
      field: "price",
      sortable: true,
      valueFormatter: (params: any) => {
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
      return params.data.make + params.data.model;
    };
  }, []);

  const onRowSelected = useCallback((event: any) => {
    if (event.data && event.node.isSelected()) {
      const { price } = event.data;
      const discountRate = event.context.discount;
      console.log("Price with 10% discount:", price * discountRate);
    }
  }, []);

  /**
   * excel export (enterprise에서 동작)
   */
  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <AggridWrap>AG-grid</AggridWrap>
        <div style={containerStyle}>
          <div className="test-container">
            <div className="test-header">
              <button
                type="button"
                onClick={onBtExport}
                style={{ marginBottom: "5px", fontWeight: "bold" }}
              >
                Export to Excel
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
