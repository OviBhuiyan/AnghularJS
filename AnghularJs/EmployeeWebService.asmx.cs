using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Linq;

namespace AnghularJs
{
    /// <summary>
    /// Summary description for EmployeeWebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class EmployeeWebService : System.Web.Services.WebService
    {
        DemoAnghularJsDBEntities db = new DemoAnghularJsDBEntities();
        [WebMethod]
        public void GetAllEmployee()
        {
            List<tblEmployee> listEmployees = new List<tblEmployee>();
            listEmployees = db.tblEmployees.ToList();

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listEmployees));
        }
    }
}
