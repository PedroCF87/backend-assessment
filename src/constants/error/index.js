module.exports = {
    // General Errors: 1 - 9
    errorInvalidFields: {
      code: 1,
      message: 'Invalid fields.',
      errors: []
    }, 
    
    // Itens Errors: 10 - 19
    itensNotFound: {
      error: {
        code: 10,
        message: 'No items found.'
      }
    },
    itemNotFound: {
      error: {
        code: 11,
        message: 'Item not found.'
      }
    },
    itemNotInserted: {
      error: {
        code: 12,
        message: 'There was an error saving the itens.'
      }
    },
  
    // Orders Errors: 20 - 29
    oderNotInserted: {
      error: {
        code: 20,
        message: 'There was an error saving the order.'
      }
    },
    orderNotUpdated: {
      error: {
        code: 13,
        message: 'There was an error updating the order.'
      }
    },
    orderAlreadyUpdated: {
      error: {
        code: 13,
        message: 'Order already up to date.'
      }
    }

  }
  