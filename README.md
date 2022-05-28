# Blogging System Backend

URL : https://sushant-blogging.herokuapp.com/

# How to Use 

## Registring Author

### Request

`POST /auth/register`

    {
      "name" : "Sushant Gaikwad",
      "email" : "sushant@gmail.com",
      "password": "Sushant@1234"
    }

### Response

 Success (Status Code 200)
      {
         status : "Registration Successfull",
         user : {
                   "name" : "Sushant Gaikwad",
                   "email": "sushant@gmail.com",
                   "password": "Sushant@1234"
                }
        
      }
 
Failure (Status Code 401)
      {
        status : "Registration Failed",
        error : error
      }

## Creating Post

### Request

`POST /blog/BlogPost`

    {
      "title" : "title_of_blog",
      "description" : "description_of_blog",
      "label" : "lable_of_blog"
    }

### Response

    Success (Status Code 200)
      {
         status : "Blog Successfully Saved",
         blog : {
                    "title" : "title_of_blog",
                    "description" : "description_of_blog",
                    "label" : "lable_of_blog"
                }        
      }
 
Failure (Status Code 401)
      {
            status : "Error Occured in Saving Blog",
            error : error
      }

## For Getting All Blogs By Popularity

### Request

`GET /blog/allblogs`

### Response

   Success (Status Code 200)
      {
          status : "Success Fetched All Blogs",
          blogs : blogs      
      }
 
   Failure (Status Code 401)
      {
            status : "Error Occured during Fetching All blogs",
            error : error
      }
      
## Search Blogs based on Author and Title

### Request

`GET /blog/search?author=author_name&title=title`

### Response

     Success (Status Code 200)
      {
          status : "Successfully Fetched",
          blog : response    
      }
 
   Failure (Status Code 401)
      {
            status : "Failed",
            message : "Author or Title name is not Correct"
      }

## Publish Blog 

### Request

`POST /blog/publish`

### Response

     Success (Status Code 200)
      {
          status: "Successfully Published"
      }
 
   Failure (Status Code 401)
      {
            status: "Error occured during Publishing",
            message : error
      }
    

## To View a Blog

### Request

`GET /blog/blogdetails`

    {
      headers : {
          "blogid" : blogid,
      }
    }

### Response

     Success (Status Code 200)
      {
          status : "Success",
          blog : blogDetails
      }
 
   Failure (Status Code 401)
      {
            status : "Failed"
      }
    

## To Like or Unlike a Blog

### Request

`PUT /blog/like`

    {
      headers : {
          "blogid" : blogid,
          "authorid" : authorid
      }
    }


### Response

    Success (Status Code 200)
      {
          status : 'Liked Successfully' or 'Unliked Successfully'
      }
 
   Failure (Status Code 401)
      {
             status : "Error Occured",
      }

