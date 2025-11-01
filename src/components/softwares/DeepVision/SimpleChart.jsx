"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SimpleChart = ({ data, type = 'line', title, height = 300 }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  if (!chartData || chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px] text-gray-500">
        No data available for {title}.
      </div>
    );
  }

  const maxValue = Math.max(...chartData.map(item => item.value));
  const minValue = Math.min(...chartData.map(item => item.value));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pieVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const getPath = (points) => {
    if (points.length === 0) return "";
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }
    return path;
  };

  const renderLineChart = () => {
    const padding = 40;
    const chartWidth = 300 - padding * 2;
    const chartHeight = height - padding * 2;

    const xStep = chartWidth / (chartData.length - 1);
    const yRatio = chartHeight / (maxValue - minValue || 1);

    const points = chartData.map((item, index) => ({
      x: padding + index * xStep,
      y: height - padding - (item.value - minValue) * yRatio,
    }));

    return (
      <svg width="100%" height={height} viewBox={`0 0 300 ${height}`}>
        {/* X-axis labels */}
        {chartData.map((item, index) => (
          <text
            key={`x-label-${index}`}
            x={padding + index * xStep}
            y={height - padding + 15}
            textAnchor="middle"
            fontSize="10"
            fill="#6B7280"
          >
            {item.label}
          </text>
        ))}
        {/* Y-axis labels */}
        <text x={padding - 5} y={height - padding} textAnchor="end" fontSize="10" fill="#6B7280">
          {minValue.toFixed(0)}
        </text>
        <text x={padding - 5} y={padding} textAnchor="end" fontSize="10" fill="#6B7280">
          {maxValue.toFixed(0)}
        </text>

        {/* Line */}
        <motion.path
          d={getPath(points)}
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Points */}
        {points.map((point, index) => (
          <motion.circle
            key={`point-${index}`}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 + index * 0.05 }}
          />
        ))}
      </svg>
    );
  };

  const renderBarChart = () => {
    const padding = 40;
    const chartWidth = 300 - padding * 2;
    const chartHeight = height - padding * 2;

    const barWidth = chartWidth / chartData.length / 1.5;
    const xStep = chartWidth / chartData.length;
    const yRatio = chartHeight / (maxValue || 1);

    return (
      <svg width="100%" height={height} viewBox={`0 0 300 ${height}`}>
        {/* X-axis labels */}
        {chartData.map((item, index) => (
          <text
            key={`x-label-${index}`}
            x={padding + index * xStep + xStep / 2}
            y={height - padding + 15}
            textAnchor="middle"
            fontSize="10"
            fill="#6B7280"
          >
            {item.label}
          </text>
        ))}
        {/* Y-axis labels */}
        <text x={padding - 5} y={height - padding} textAnchor="end" fontSize="10" fill="#6B7280">
          0
        </text>
        <text x={padding - 5} y={padding} textAnchor="end" fontSize="10" fill="#6B7280">
          {maxValue.toFixed(0)}
        </text>

        {/* Bars */}
        {chartData.map((item, index) => (
          <motion.rect
            key={`bar-${index}`}
            x={padding + index * xStep + (xStep - barWidth) / 2}
            y={height - padding}
            width={barWidth}
            height={0}
            fill="#3B82F6"
            initial={{ y: height - padding, height: 0 }}
            animate={{ y: height - padding - item.value * yRatio, height: item.value * yRatio }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          />
        ))}
      </svg>
    );
  };

  const renderPieChart = () => {
    const centerX = 150;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    let startAngle = 0;

    const total = chartData.reduce((sum, item) => sum + item.value, 0);

    const colors = ['#10B981', '#3B82F6', '#EF4444', '#F59E0B', '#6366F1', '#EC4899'];

    return (
      <svg width="100%" height={height} viewBox={`0 0 300 ${height}`}>
        {chartData.map((item, index) => {
          const sliceAngle = (item.value / total) * 360;
          const endAngle = startAngle + sliceAngle;

          const startRad = (Math.PI / 180) * startAngle;
          const endRad = (Math.PI / 180) * endAngle;

          const x1 = centerX + radius * Math.cos(startRad);
          const y1 = centerY + radius * Math.sin(startRad);
          const x2 = centerX + radius * Math.cos(endRad);
          const y2 = centerY + radius * Math.sin(endRad);

          const largeArcFlag = sliceAngle > 180 ? 1 : 0;

          const d = `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;

          startAngle = endAngle;

          return (
            <motion.path
              key={`pie-slice-${index}`}
              d={d}
              fill={colors[index % colors.length]}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          );
        })}
        {/* Labels for pie chart */}
        {chartData.map((item, index) => {
          const sliceAngle = (item.value / total) * 360;
          const midAngle = (startAngle - sliceAngle / 2); // Calculate mid-angle for label positioning
          const midRad = (Math.PI / 180) * midAngle;

          const labelX = centerX + (radius / 1.5) * Math.cos(midRad);
          const labelY = centerY + (radius / 1.5) * Math.sin(midRad);

          return (
            <motion.text
              key={`pie-label-${index}`}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              fontSize="12"
              fill="#fff"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              {item.label} ({((item.value / total) * 100).toFixed(1)}%)
            </motion.text>
          );
        })}
      </svg>
    );
  };

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="relative" style={{ height: `${height}px` }}>
        {type === 'line' && renderLineChart()}
        {type === 'bar' && renderBarChart()}
        {type === 'pie' && renderPieChart()}
      </div>
    </motion.div>
  );
};

export default SimpleChart;