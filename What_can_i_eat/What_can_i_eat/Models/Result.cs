using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestionApp.Models
{
    public class Result
    {

        //Gebruik deze drie static methode om simpelweg een result te genereren; bv Result result = Result.SuccessResultWithSingleObject( data );
        //De namen spreken voor zich

        public static Result SuccessResultWithSingleObject(object o)
        {
            return new ResultWithObject() { data = o };
        }
        public static Result SuccessResultWithArray(object[] o)
        {
            return new ResultWithArray() { data = o };
        }
        public static Result ErrorResultWithMessage(string m)
        {
            return new ResultWithError() { error = new ErrorWithMessage() { message = m } };
        }

        //Making a json object string from the class instance
        public string Json()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
    public class ResultWithObject : Result
    {
        public object data { get; set; }
    }
    public class ResultWithArray : Result
    {
        public object[] data { get; set; }
    }
    public class ResultWithError : Result
    {
        public Error error { get; set; }
    }
    public class Error
    {

    }
    public class ErrorWithMessage : Error
    {
        public string message { get; set; }
    }
} 
