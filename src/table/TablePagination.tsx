import { PropsWithChildren } from 'react'
import Pagination from '@mui/material/Pagination'
import { TableInstance } from 'react-table'

// import FirstPageIcon from '@material-ui/icons/FirstPage'
// import LastPageIcon from '@material-ui/icons/LastPage'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight'

// NOTE: 今後複雑な要件が追加され、に対応できなくなった場合コメントアウトされているコンポーネントを拡張し使用する
export function TablePagination<T extends object>({
  instance,
}: PropsWithChildren<{ instance: TableInstance<T> }>) {
  const { pageCount, gotoPage } = instance

  return (
    <div className="flex items-center justify-between border-shade-light-default bg-shade-white-default px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div />
        <div>
          <Pagination
            size="large"
            shape="rounded"
            count={pageCount}
            showFirstButton
            showLastButton
            onChange={(_, page: number) => gotoPage(page - 1)}
            // css={[
            //   css`
            //     .Mui-selected {
            //       ${tw`bg-shade-light-default rounded-md`}
            //     }
            //     .MuiPaginationItem-icon {
            //       ${tw`border border-shade-light-active rounded-md`}
            //     }
            //   `,
            // ]}
          />
        </div>
      </div>
    </div>
  )
}

//NOTE: react-tableから提供されるメソッドを利用したページネーション。
//      今後使用する可能性があるため一時的にコメントアウト

// export function TablePagination<T extends object>({
//   instance,
// }: PropsWithChildren<{ instance: TableInstance<T> }>) {
//   const paginationSize = 5
//   const {
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     previousPage,
//     nextPage,
//     state: { pageIndex },
//   } = instance

//   console.log({
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     previousPage,
//     nextPage,
//     state: { pageIndex },
//   })

//   return (
//     <div className="bg-shade-white-default px-4 py-3 flex items-center justify-between border-shade-light-default sm:px-6">
//       <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//         <div></div>
//         <div>
//           <nav className="relative z-0 inline-flex">
//             <button
//               onClick={() => gotoPage(0)}
//               disabled={!canPreviousPage}
//               className="w-10 h-10
//               flex justify-center items-center
//               ml-2 px-2 py-2 rounded-full
//               bg-shade-white-default text-sm leading-5 font-medium
//               transition ease-in-out duration-150
//               hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default focus:shadow-outline
//               active:bg-primary-light-default-default active:text-gray-low
//               disabled:opacity-25 disabled:cursor-not-allowed"
//             >
//               <FirstPageIcon />
//             </button>
//             <button
//               onClick={() => previousPage()}
//               disabled={!canPreviousPage}
//               className="w-10 h-10 ml-2
//               flex justify-center items-center
//               px-2 py-2 rounded-full bg-shade-white-default text-sm leading-5 font-medium
//               transition ease-in-out duration-150
//               hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default focus:shadow-outline
//               active:bg-primary-light-default-default active:text-gray-low
//               disabled:opacity-25 disabled:cursor-not-allowed"
//             >
//               <ChevronLeftIcon />
//             </button>
//             <button
//               onClick={() => previousPage()}
//               className="w-10 h-10
//               flex justify-center items-center
//               ml-2 px-2 py-2 rounded-full
//               bg-primary-dark-default text-sm leading-5 font-medium text-primary-white-default
//               transition ease-in-out duration-150
//               hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default
//               focus:shadow-outline active:bg-primary-light-default-default active:text-gray-low
//               disabled:opacity-25 disabled:cursor-not-allowed"
//             >
//               {pageIndex + 1}
//             </button>
//             {[...Array(5)]
//               .map((_, i) => i + 1)
//               .map((index) => {
//                 return (
//                   <button
//                     onClick={() => gotoPage(pageIndex + index)}
//                     className="w-10 h-10
//                     flex justify-center items-center
//                     ml-2 px-2 py-2 rounded-full
//                     bg-shade-white-default text-sm leading-5 font-medium
//                     transition ease-in-out duration-150
//                     hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default focus:shadow-outline
//                     active:bg-primary-light-default-default active:text-gray-low disabled:opacity-25 disabled:cursor-not-allowed"
//                     key={index}
//                   >
//                     {pageIndex + index + 1}
//                   </button>
//                 )
//               })}
//             <button
//               disabled={!canPreviousPage}
//               className="w-10 h-10 ml-2
//               flex justify-center items-center
//               px-2 py-2 rounded-full
//               bg-shade-white-default text-sm leading-5 font-medium
//               transition ease-in-out duration-150
//               hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default focus:shadow-outline
//               active:bg-primary-light-default-default active:text-gray-low disabled:opacity-25 disabled:cursor-not-allowed"
//             >
//               ...
//             </button>
//             <button
//               onClick={() => gotoPage(pageIndex + 9)}
//               className="w-10 h-10
//               flex justify-center items-center
//               ml-2 px-2 py-2 rounded-full
//               bg-shade-white-default text-sm leading-5 font-medium
//               transition ease-in-out duration-150
//               hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default focus:shadow-outline
//               active:bg-primary-light-default-default active:text-gray-low disabled:opacity-25 disabled:cursor-not-allowed"
//             >
//               {pageIndex + 10}
//             </button>
//             <button
//               onClick={() => nextPage()}
//               disabled={!canNextPage}
//               className="w-10 h-10
//               flex justify-center items-center
//               ml-2 px-2 py-2 rounded-full
//               bg-shade-white-default text-sm leading-5 font-medium
//               transition ease-in-out duration-150
//               hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default focus:shadow-outline
//               active:bg-primary-light-default-default active:text-gray-low disabled:opacity-25 disabled:cursor-not-allowed"
//               aria-label="Next"
//             >
//               <ChevronRightIcon />
//             </button>
//             <button
//               onClick={() => gotoPage(pageOptions.length - 1)}
//               disabled={!canNextPage}
//               className="w-10 h-10
//               flex justify-center items-center
//               ml-2 px-2 py-2 rounded-full bg-shade-white-default text-sm leading-5 font-medium
//               transition ease-in-out duration-150
//               hover:text-gray-hover focus:z-10 focus:outline-none focus:border-primary-dark-default focus:shadow-outline
//               active:bg-primary-light-default-default active:text-gray-low disabled:opacity-25 disabled:cursor-not-allowed"
//             >
//               <LastPageIcon />
//             </button>
//           </nav>
//         </div>
//       </div>
//     </div>
//   )
// }
