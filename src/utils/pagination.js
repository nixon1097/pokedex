const paginateData=(items, currentPage)=>{
    
    //? cantidad de items por pagina
    const ITEMS_PER_PAGE= 21
     //? los item de la pagina 
     const sliceEnd= (currentPage * ITEMS_PER_PAGE)
     const sliceStar = sliceEnd-ITEMS_PER_PAGE
     const itemsInCurrentPage = items.slice(sliceStar,sliceEnd)

     //? ultima pagina o cantidad de paginas
     const lastPage= Math.ceil(items.length/ITEMS_PER_PAGE);

     //? Bloque actual 
     const PG_PER_BLOCK =5;
     const blockActual=  Math.ceil(currentPage/PG_PER_BLOCK)
     //? pagina que s emuestra en el bloque actual
     const pagesInCurrentBlock=[]
     const maxPage = blockActual*PG_PER_BLOCK
     const minPahe =(maxPage-PG_PER_BLOCK)+1
      for(let i=minPahe;i<=maxPage;i++){
        if(i<=lastPage){

            pagesInCurrentBlock.push(i)
        }
      }
      return {
        itemsInCurrentPage,
        pagesInCurrentBlock,
        lastPage,
        blockActual,
    
      }


    }

export{
    paginateData,
}