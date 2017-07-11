<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2015 Marcus Hellmann, Göttingen Academy of Sciences and Humanities
 *                <mhellma1@gwdg.de>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 ******************************************************************************/


namespace Gjz18\TmplGjz\ViewHelpers;

    $url = $_POST['myFacetUrl'];
    $context  = stream_context_create(array('http' => array('header' => 'Accept: application/xml')));
    $xml = file_get_contents($url, false, $context);
    $xml = simplexml_load_string($xml);
    //$ppnArray = $xml->xpath("//response/lst[@name='facet_counts']/lst[@name='facet_queries']/int/@name");
    //$ppnArray = $xml->xpath("//response/result/@name");
    $nArr = array();
    foreach ($xml->xpath("//response/lst[name='facet_counts']/lst[name='facet_fields']/lst[name='pd045Q01s9']/int") as $child) {
      echo($child['name']);
    }
    //$ppnArrayClean = array();
    //echo($ppnArray[0]);
    /*foreach ($ppnArray as $pA => $vpa) {
      echo($pA);
      echo($vpa);
      $ppnArrayClean[] = $vpa;
    }*/
    //echo($nArr[0]);
    return;

?>