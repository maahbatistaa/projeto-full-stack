using Microsoft.EntityFrameworkCore;
using LojaApi.Models;

namespace LojaApi.Data{

  public class DataContext : DbContext{
    public DataContext(DbContextOptions<DataContext> options) : base(options){

    }

    public DbSet<Categoria> Categorias { get; set; }
  }
}