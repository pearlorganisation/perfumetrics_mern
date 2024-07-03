import React from 'react'

const Loader = () => {
    return (
        <div className="grid place-items-center h-[90vh]">
            <div className="spinner"></div>

            <style jsx>{`
        .spinner {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: radial-gradient(farthest-side, #f9bcdd 94%, #0000) top/9px
              9px no-repeat,
            conic-gradient(#0000 30%, #f9bcdd);
          -webkit-mask: radial-gradient(
            farthest-side,
            #0000 calc(100% - 9px),
            #000 0
          );
          animation: spinner-c7wet2 1s infinite linear;
        }

        @keyframes spinner-c7wet2 {
          100% {
            transform: rotate(1turn);
          }
        }
      `}</style>
        </div>
    )
}

export default Loader