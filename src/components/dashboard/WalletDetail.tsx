import React from 'react';
import CMSection from '../common/CMSection';
import { IToken } from '../../intreface/token';
import Chart from "react-apexcharts";
import { tokenIndex } from '../../data/coinInfo';
import CMEmpty from '../common/CMEmpty';

type Props = {
  tokens: IToken[]
}

const WalletDetail = ({tokens}:Props) => {
  const labels= tokenIndex
  const options:ApexCharts.ApexOptions = {yaxis:{labels:{formatter:(value)=>value.toFixed(3)}}, chart:{animations:{enabled:true}}, legend:{fontSize:"15px",fontWeight:600,fontFamily:"PretendarVar", position:'bottom', itemMargin:{vertical:15}},dataLabels:{enabled:false},labels:labels}
  const series= tokens.map(item=>parseFloat(item.amount));
  return (
    <CMSection title="자산 상세 구성">
      {
        tokens.length>0 && <Chart options={options} series={series} type='donut' width="100%"/>
      }
    </CMSection>
  );
};

export default WalletDetail;
