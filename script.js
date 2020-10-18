var ec = new evercookie(); 

// set a cookie "id" to "12345"
// usage: ec.set(key, value)
ec.set("id", "12345"); 

// retrieve a cookie called "id" (simply)
ec.get("id", function(value) { alert("Cookie value is " + value) }); 

// or use a more advanced callback function for getting our cookie
// the cookie value is the first param
// an object containing the different storage methods
// and returned cookie values is the second parameter
function getCookie(best_candidate, all_candidates)
{
    alert("The retrieved cookie is: " + best_candidate + "\n" +
        "You can see what each storage mechanism returned " +
        "by looping through the all_candidates object.");

    for (var item in all_candidates)
        document.write("Storage mechanism " + item +
            " returned: " + all_candidates[item] + "<br>");
}
ec.get("id", getCookie); 

// we look for "candidates" based off the number of "cookies" that
// come back matching since it's possible for mismatching cookies.
// the best candidate is most likely the correct one
