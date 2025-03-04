

import { useState, useRef } from "react"
import { motion } from "framer-motion"


export function CustomRangeSlider({
    min,
    max,
    step = 1,
    defaultValue,
    onChange,
    className = "",
    showValue = true,
    valuePrefix = "",
    valueSuffix = "",
    trackColor = "bg-gray-200",
    progressColor = "bg-gradient-to-r from-indigo-500 to-purple-600",
    thumbColor = "bg-white",
    thumbSize = "md",
    showTicks = false,
    tickCount = 5,
    disabled = false,
}) {
    // Use provided default value or fallback to min
    const [value, setValue] = useState(defaultValue !== undefined ? defaultValue : min)
    const [isDragging, setIsDragging] = useState(false)
    const trackRef = useRef(null)
    const thumbRef = useRef(null)

    // Calculate percentage for positioning
    const percentage = ((value - min) / (max - min)) * 100

    // Handle thumb size
    const thumbSizeMap = {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
    }
    const thumbSizeClass = thumbSizeMap[thumbSize]

    // Generate tick marks
    const ticks = showTicks
        ? Array.from({ length: tickCount }, (_, i) => {
            const tickValue = min + ((max - min) / (tickCount - 1)) * i
            const tickPercentage = ((tickValue - min) / (max - min)) * 100
            return { value: tickValue, percentage: tickPercentage }
        })
        : []

    // Handle input change
    const handleChange = (e) => {
        if (disabled) return
        const newValue = Number.parseFloat(e.target.value)
        setValue(newValue)
        if (onChange) onChange(newValue)
    }

    // Handle track click
    const handleTrackClick = (e) => {
        if (disabled || !trackRef.current) return

        const rect = trackRef.current.getBoundingClientRect()
        const clickPosition = e.clientX - rect.left
        const trackWidth = rect.width
        const clickPercentage = (clickPosition / trackWidth) * 100

        const newValue = min + (clickPercentage / 100) * (max - min)
        const steppedValue = Math.round(newValue / step) * step
        const clampedValue = Math.min(Math.max(steppedValue, min), max)

        setValue(clampedValue)
        if (onChange) onChange(clampedValue)
    }

    // Get thumb dot size based on thumb size
    const getThumbDotSize = () => {
        if (thumbSize === "sm") return "h-1 w-1"
        if (thumbSize === "md") return "h-1.5 w-1.5"
        return "h-2 w-2 "
    }

    return (
        <div className={`relative w-full ${className} ${disabled ? "opacity-60" : ""}`}>
            {/* Custom track */}
            <div
                ref={trackRef}
                className={`relative h-2 rounded-full cursor-pointer ${trackColor} overflow-hidden`}
                onClick={handleTrackClick}
            >
                {/* Progress bar */}
                <div className={`absolute h-full ${progressColor}`} style={{ width: `${percentage}%` }} />
            </div>

            {/* Tick marks */}
            {showTicks && (
                <div className="relative h-0">
                    {ticks.map((tick, index) => (
                        <div
                            key={index}
                            className="absolute w-0.5 h-2 bg-gray-400 -translate-x-1/2 mt-3"
                            style={{ left: `${tick.percentage}%` }}
                        >
                            <span className="absolute text-xs text-gray-500 -translate-x-1/2 mt-3">{tick.value}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Actual range input (invisible but functional) */}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            />

            {/* Custom thumb */}
            <motion.div
                ref={thumbRef}
                className={`absolute -top-2 -translate-y-1/2 ${thumbSizeClass} rounded-full shadow-lg ${thumbColor} border-2 border-purple-500 flex items-center justify-center pointer-events-none`}
                style={{ left: `${percentage}%`, transform: `translateX(-50%) translateY(-50%)` }}
                animate={{
                    scale: isDragging ? 1.2 : 1,
                    boxShadow: isDragging ? "0px 0px 10px rgba(99, 102, 241, 0.6)" : "0px 0px 0px rgba(99, 102, 241, 0)",
                }}
                transition={{ duration: 0.2 }}
            >
                <div className={`${getThumbDotSize()} rounded-full bg-purple-500`}>1</div>
            </motion.div>

            {/* Value display */}
            {showValue && (
                <motion.div
                    className="absolute mt-6 px-2 py-1 rounded-md bg-gray-800 text-white text-sm font-medium shadow-md"
                    style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
                    animate={{
                        opacity: isDragging ? 1 : 0,
                        y: isDragging ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {valuePrefix}
                    {value}
                    {valueSuffix}
                </motion.div>
            )}
        </div>
    )
}



