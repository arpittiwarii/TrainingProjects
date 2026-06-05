const paginate = ({ page = 1, limit = 20 } = {}) => {
    const safePage = Math.max(1, parseInt(page))
    const safeLimit = Math.min(100, Math.max(1, parseInt(limit)))  // max 100
    return {
      limit: safeLimit,
      offset: (safePage - 1) * safeLimit,
    }
  }
  
  // Usage in service:
  const getTransactions = async (playerId, { page, limit } = {}) => {
    const { limit: l, offset } = paginate({ page, limit })
  
    const { rows, count } = await Transaction.findAndCountAll({
      where: { player_id: playerId },
      order: [["created_at", "DESC"]],
      limit: l,
      offset,
      connection: slaveDB,
    })
  
    return {
      data: rows,
      pagination: {
        total: count,
        page: parseInt(page) || 1,
        limit: l,
        totalPages: Math.ceil(count / l),
      },
    }
  }
  