"use client"

import { useRef, useState } from "react"
import { X } from "lucide-react"
import { userStore } from "@/store/userStore";
import perfumeMetaData from "@/store/perfumeMetaData";
import { toast } from "sonner";


const CustomerFeedbackModal = ({
  perfumeId = "6782a368643310f058973ca1",
  reviewerId = "6749887036dcf59d19b7f1b4",
  onClose,
}) => {
  const { user, isUserLoggedIn, logout } = userStore();
  const { id: productId, setId, clearId } = perfumeMetaData();
  const [isOpen, setIsOpen] = useState(true)
  const modalRef = useRef()
  const [loading, setLoading] = useState(false)

  // Selected values
  const [selectedReaction, setSelectedReaction] = useState(null)
  const [selectedSeason, setSelectedSeason] = useState(null)

  // Slider values (0-4 index)
  const [longevityValue, setLongevityValue] = useState(2)
  const [sillageValue, setSillageValue] = useState(1)
  const [priceValue, setPriceValue] = useState(2)
  const [genderValue, setGenderValue] = useState(2)

  // Maps slider values to text values
  const longevityOptions = ["eternal", "veryWeak", "weak", "moderate", "longLasting"]
  const sillageOptions = ["noVote", "intimate", "moderate", "strong", "enormous"]
  const priceValueOptions = ["wayOverPriced", "overPriced", "ok", "goodValue", "greatValue"]
  const genderOptions = ["male", "moreMale", "unisex", "moreFemale", "female"]

  const handleSubmit = () => {
    if (!selectedReaction || !selectedSeason) {
      alert("Please select a reaction and season")
      return
    }

    const formData = {
      longevity: longevityOptions[longevityValue],
      sillage: sillageOptions[sillageValue],
      priceValue: priceValueOptions[priceValue],
      gender: genderOptions[genderValue],
      season: selectedSeason,
      reaction: selectedReaction,
      perfume: productId, reviewBy: user?._id
    }

    console.log(formData)
    reviewSubmission(formData)

  }

  const handleClose = () => {
    setIsOpen(false)
    if (onClose) {
      onClose()
    }
  }

  // Custom cn function to conditionally join classNames
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ")
  }

  async function reviewSubmission(payload) {
    try {
      setLoading(true)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/review`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
          cache: "no-store",
        }
      );
      const data = await response.json();
      if (data?.success || data?.status) {
        toast.success("Submitted!!", { position: 'top-center' })
        handleClose()
        setLoading(false)
      } else {
        toast.error(data.message, { position: 'top-center' })
        setLoading(false)

      }

    } catch (error) {
      toast.error(error.message, { position: 'top-center' })
      console.log(error.message)
    }

  }

  if (!isOpen) return null


  return (
    <div className="fixed inset-0 bg-black/30 z-50 overflow-auto backdrop-blur-md grid place-items-center">
      <div className="max-w-4xl mx-auto px-4 py-6 bg-white">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold">Give Your FeedBack</h1>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-10">
          {/* Reactions */}
          <div className="grid grid-cols-5 md:grid-cols-11 gap-2 text-center">
            <button
              onClick={() => setSelectedReaction("veryGood")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedReaction === "veryGood" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedReaction === "veryGood" ? "bg-green-100 ring-2 ring-green-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">😄</span>
              </div>
              <span className="text-xs">Very Good</span>
            </button>

            <button
              onClick={() => setSelectedReaction("good")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedReaction === "good" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedReaction === "good" ? "bg-green-100 ring-2 ring-green-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🙂</span>
              </div>
              <span className="text-xs">Good</span>
            </button>

            <button
              onClick={() => setSelectedReaction("fine")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedReaction === "fine" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedReaction === "fine" ? "bg-yellow-100 ring-2 ring-yellow-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">😐</span>
              </div>
              <span className="text-xs">Fine</span>
            </button>

            <button
              onClick={() => setSelectedReaction("notGood")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedReaction === "notGood" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedReaction === "notGood" ? "bg-orange-100 ring-2 ring-orange-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🙁</span>
              </div>
              <span className="text-xs">Not Good</span>
            </button>

            <button
              onClick={() => setSelectedReaction("worst")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedReaction === "worst" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedReaction === "worst" ? "bg-red-100 ring-2 ring-red-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">😞</span>
              </div>
              <span className="text-xs">Worst</span>
            </button>

            <button
              onClick={() => setSelectedSeason("winter")}
              className={cn(
                "flex flex-col items-center focus:outline-none md:block hidden",
                selectedSeason === "winter" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "winter" ? "bg-blue-100 ring-2 ring-blue-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">❄️</span>
              </div>
              <span className="text-xs">Winter</span>
            </button>

            <button
              onClick={() => setSelectedSeason("spring")}
              className={cn(
                "flex flex-col items-center focus:outline-none md:block hidden",
                selectedSeason === "spring" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "spring" ? "bg-green-100 ring-2 ring-green-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🌿</span>
              </div>
              <span className="text-xs">Spring</span>
            </button>

            <button
              onClick={() => setSelectedSeason("summer")}
              className={cn(
                "flex flex-col items-center focus:outline-none md:block hidden",
                selectedSeason === "summer" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "summer" ? "bg-yellow-100 ring-2 ring-yellow-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">☀️</span>
              </div>
              <span className="text-xs">Summer</span>
            </button>

            <button
              onClick={() => setSelectedSeason("fall")}
              className={cn(
                "flex flex-col items-center focus:outline-none md:block hidden",
                selectedSeason === "fall" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "fall" ? "bg-orange-100 ring-2 ring-orange-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🍂</span>
              </div>
              <span className="text-xs">Fall</span>
            </button>

            <button
              onClick={() => setSelectedSeason("day")}
              className={cn(
                "flex flex-col items-center focus:outline-none md:block hidden",
                selectedSeason === "day" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "day" ? "bg-yellow-100 ring-2 ring-yellow-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🌞</span>
              </div>
              <span className="text-xs">Day</span>
            </button>

            <button
              onClick={() => setSelectedSeason("night")}
              className={cn(
                "flex flex-col items-center focus:outline-none md:block hidden",
                selectedSeason === "night" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "night" ? "bg-indigo-100 ring-2 ring-indigo-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🌙</span>
              </div>
              <span className="text-xs">Night</span>
            </button>
          </div>

          {/* Seasonal and Time Options for Mobile */}
          <div className="grid grid-cols-6 gap-2 text-center md:hidden">
            <button
              onClick={() => setSelectedSeason("winter")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedSeason === "winter" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "winter" ? "bg-blue-100 ring-2 ring-blue-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">❄️</span>
              </div>
              <span className="text-xs">Winter</span>
            </button>

            <button
              onClick={() => setSelectedSeason("spring")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedSeason === "spring" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "spring" ? "bg-green-100 ring-2 ring-green-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🌿</span>
              </div>
              <span className="text-xs">Spring</span>
            </button>

            <button
              onClick={() => setSelectedSeason("summer")}
              className={cn(
                "flex flex-col items-center focus:outline-none",
                selectedSeason === "summer" && "scale-110",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "summer" ? "bg-yellow-100 ring-2 ring-yellow-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">☀️</span>
              </div>
              <span className="text-xs">Summer</span>
            </button>

            <button
              onClick={() => setSelectedSeason("fall")}
              className={cn("flex flex-col items-center focus:outline-none", selectedSeason === "fall" && "scale-110")}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "fall" ? "bg-orange-100 ring-2 ring-orange-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🍂</span>
              </div>
              <span className="text-xs">Fall</span>
            </button>

            <button
              onClick={() => setSelectedSeason("day")}
              className={cn("flex flex-col items-center focus:outline-none", selectedSeason === "day" && "scale-110")}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "day" ? "bg-yellow-100 ring-2 ring-yellow-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🌞</span>
              </div>
              <span className="text-xs">Day</span>
            </button>

            <button
              onClick={() => setSelectedSeason("night")}
              className={cn("flex flex-col items-center focus:outline-none", selectedSeason === "night" && "scale-110")}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors",
                  selectedSeason === "night" ? "bg-indigo-100 ring-2 ring-indigo-500" : "bg-gray-100",
                )}
              >
                <span className="text-2xl">🌙</span>
              </div>
              <span className="text-xs">Night</span>
            </button>
          </div>

          {/* Longevity Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-blue-600">Longevity</h2>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[0, 1, 2, 3, 4].map((value) => (
                  <button
                    key={`longevity-${value}`}
                    onClick={() => setLongevityValue(value)}
                    className={cn(
                      "flex flex-col items-center focus:outline-none transition-all",
                      longevityValue === value && "scale-110",
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors",
                        longevityValue === value ? "bg-teal-100 ring-2 ring-teal-500" : "bg-gray-100",
                      )}
                    >
                      <span className="text-xl">
                        {value === 0 && "😊"}
                        {value === 1 && "😔"}
                        {value === 2 && "😐"}
                        {value === 3 && "🙂"}
                        {value === 4 && "😄"}
                      </span>
                    </div>
                    <span className="text-xs">
                      {value === 0 && "Eternal"}
                      {value === 1 && "Very Weak"}
                      {value === 2 && "Weak"}
                      {value === 3 && "Moderate"}
                      {value === 4 && "Long Lasting"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sillage Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-blue-600">Sillage</h2>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[0, 1, 2, 3, 4].map((value) => (
                  <button
                    key={`sillage-${value}`}
                    onClick={() => setSillageValue(value)}
                    className={cn(
                      "flex flex-col items-center focus:outline-none transition-all",
                      sillageValue === value && "scale-110",
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors",
                        sillageValue === value ? "bg-teal-100 ring-2 ring-teal-500" : "bg-gray-100",
                      )}
                    >
                      <span className="text-xl">
                        {value === 0 && "😔"}
                        {value === 1 && "🙁"}
                        {value === 2 && "😐"}
                        {value === 3 && "🙂"}
                        {value === 4 && "😄"}
                      </span>
                    </div>
                    <span className="text-xs">
                      {value === 0 && "No Vote"}
                      {value === 1 && "Intimate"}
                      {value === 2 && "Moderate"}
                      {value === 3 && "Strong"}
                      {value === 4 && "Enormous"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Value Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-blue-600">PRICE VALUE</h2>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[0, 1, 2, 3, 4].map((value) => (
                  <button
                    key={`price-${value}`}
                    onClick={() => setPriceValue(value)}
                    className={cn(
                      "flex flex-col items-center focus:outline-none transition-all",
                      priceValue === value && "scale-110",
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors",
                        priceValue === value ? "bg-teal-100 ring-2 ring-teal-500" : "bg-gray-100",
                      )}
                    >
                      <span className="text-xl">
                        {value === 0 && "😖"}
                        {value === 1 && "🙁"}
                        {value === 2 && "😐"}
                        {value === 3 && "🙂"}
                        {value === 4 && "😄"}
                      </span>
                    </div>
                    <span className="text-xs">
                      {value === 0 && "Way Over Priced"}
                      {value === 1 && "Over Priced"}
                      {value === 2 && "Ok"}
                      {value === 3 && "Good Value"}
                      {value === 4 && "Great Value"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gender Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-blue-600">GENDER</h2>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[0, 1, 2, 3, 4].map((value) => (
                  <button
                    key={`gender-${value}`}
                    onClick={() => setGenderValue(value)}
                    className={cn(
                      "flex flex-col items-center focus:outline-none transition-all",
                      genderValue === value && "scale-110",
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors",
                        genderValue === value ? "bg-teal-100 ring-2 ring-teal-500" : "bg-gray-100",
                      )}
                    >
                      <span className="text-xl">
                        {value === 0 && "👨"}
                        {value === 1 && "👨‍💼"}
                        {value === 2 && "⚥"}
                        {value === 3 && "👩‍💼"}
                        {value === 4 && "👩"}
                      </span>
                    </div>
                    <span className="text-xs">
                      {value === 0 && "Male"}
                      {value === 1 && "More Male"}
                      {value === 2 && "Unisex"}
                      {value === 3 && "More Female"}
                      {value === 4 && "Female"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            {
              loading ? <button type="button" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-md">
                Loading...
              </button> : <button onClick={handleSubmit} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-md">
                SUBMIT
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerFeedbackModal

// async function reviewSubmission(payload) {
//   try {
//     setLoading(true)
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/v1/review`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload),
//         cache: "no-store",
//       }
//     );
//     const data = await response.json();
//     if (data?.success || data?.status) {
//       toast.success("Submitted!!", { position: 'top-center' })
//       modalRef.current.close()
//       setLoading(false)
//     } else {
//       toast.error(data.message, { position: 'top-center' })
//       setLoading(false)

//     }

//   } catch (error) {
//     toast.error(error.message, { position: 'top-center' })
//     console.log(error.message)
//   }

// }

