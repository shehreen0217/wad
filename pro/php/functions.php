<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 1/1/2019
 * Time: 8:32 PM
 */

require "db_connection.php";

function get_cats()
{
    global $con;
    $getCatsQuery = "select * from categories";
    $getCatsResult = mysqli_query($con, $getCatsQuery);
    while($row = mysqli_fetch_assoc($getCatsResult))
    {
        $id = $row['ID'];
        $title = $row['Title'];
        echo "<li><a class='nav-link' href='#'>$title</a></li>";
    }
}

function get_Brands()
{
    global $con;
    $getCatsQuery = "select * from brands";
    $getCatsResult = mysqli_query($con, $getCatsQuery);
    while($row = mysqli_fetch_assoc($getCatsResult))
    {
        $id = $row['id'];
        $title = $row['Title'];
        echo "<li><a class='nav-link' href='#'>$title</a></li>";
    }
}