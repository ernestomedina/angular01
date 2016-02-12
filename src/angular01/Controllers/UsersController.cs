using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace angular01.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IList<object> Get()
        {
            IList<object> usuarios = new List<object>();
            usuarios.Add( new {
                id = 1,
                username = "Usuario 01",
                firstname = "Pedro",
                lastname = "Perez",
                doc = "CC",
                docid = "87677738"
            });

            usuarios.Add(new
            {
                id = 2,
                username = "Usuario 02",
                firstname = "Carlos",
                lastname = "Alvarez",
                doc = "CC",
                docid = "654345"
            });

            usuarios.Add(new
            {
                id = 3,
                username = "Usuario 03",
                firstname = "Gonzalo",
                lastname = "Gonzalez",
                doc = "CC",
                docid = "998751"
            });

            return usuarios;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public object Get(int id)
        {
            IList<dynamic> usuarios = new List<dynamic>();
            usuarios.Add(new
            {
                id = 1,
                username = "Usuario 01",
                firstname = "Pedro",
                lastname = "Perez",
                doc = "CC",
                docid = "87677738"
            });

            usuarios.Add(new
            {
                id = 2,
                username = "Usuario 02",
                firstname = "Carlos",
                lastname = "Alvarez",
                doc = "CC",
                docid = "654345"
            });

            usuarios.Add(new
            {
                id = 3,
                username = "Usuario 03",
                firstname = "Gonzalo",
                lastname = "Gonzalez",
                doc = "CC",
                docid = "998751"
            });

            foreach ( var itm in usuarios)
            {
                if( itm.id == id)
                {
                    return itm;
                }
            }

            return null;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
