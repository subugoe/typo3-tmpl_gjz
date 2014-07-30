plugin.tx_find {
  settings {
    connection {
      host = {$plugin.tx_find.settings.connection.host}
      port = {$plugin.tx_find.settings.connection.port}
      path = {$plugin.tx_find.settings.connection.path}
    }
    queryFields {
      0 {
        id = default
        query = ###term###
        type = Text
      #  autocomplete = 1
      #  autocompleteDictionary =
      }
      10 {
        id = PPN
        extended = 1
        query = ###term###
        type = Text
        key = d003_s0
      }
      11 {
        id = Bearbeiter
        extended = 1
        query = ###term###
        type = Text
        key = d008_sb
      }
      12 {
        id = Schlagwörter
        extended = 1
        type = Text
        key = d044Lsa
        query = ###term### AND (_query_:"{!dismax qf=d044LsS pf=d044LsS v=g}" OR _query_:"{!dismax qf=d044LsS pf=d044LsS v=p}" OR _query_:"{!dismax qf=d044LsS pf=d044LsS v=s}")
      }
      13 {
        id = Geogr. Schlagwort
        extended = 1
        type = Text
        key = d044Lsa
        query = ###term### AND _query_:"{!dismax qf=d044LsS pf=d044LsS v=g}"
      }
      14 {
        id = Personenschlagwort
        extended = 1
        type = Text
        key = d044Lsa
        query = ###term### AND _query_:"{!dismax qf=d044LsS pf=d044LsS v=p}"
      }
      15 {
        id = Sachschlagwort
        extended = 1
        type = Text
        key = d044Lsa
        query = ###term### AND _query_:"{!dismax qf=d044LsS pf=d044LsS v=s}"
      }
      16 {
        id = Systemstelle
        extended = 1
        type = Text
        key = d045Q
        query = ###term###
      }
      #15 {
      #  id = notperson
      #  extended = 1
      #  query = NOT person:###term###
      #  type = Text
      #}
      #20 {
      #  id = done
      #  extended = 1
      #  type = Checkbox
      #  default = 0
      #}
      #30 {
      #  id = Schlagworttyp
      #  extended = 1
      #  type = Select
      #  options {
      #    blank =
      #    key = value
      #    key2 = value2
      #  }
      #  default = key
      #}
      #40 {
      #  id = version
      #  extended = 1
      #  type = Radio
      #  options {
      #    1 = Steak
      #    2 = Chicken
      #    3 = Pancake
      #  }
      #  default = 1
      #}
    }
    dataFields {
      default {
      }
      allow {
      }
      disallow {
      }
    }
    sort {
      #1 {
      #  id = default
      #  sortCriteria = year desc,name asc
      #}
    }
    count = {$plugin.tx_find.settings.count}
    standardFields {
      title = d021A
      snippet = d028A
    }
    facets {
      #10 {
      #  id = type
      #  autocomplete = 0
      #  hidden = 1
      #}
      20 {
        id = Jahr
        field = d011_
        type = Histogram
        fetchMaximum = 1000
        displayDefault = 1000
        sortOrder = index
        query = d011_:###term###
      }
    }
    facetDefaults {
      queryStyle = filter
      # queryStyle = and
      fetchMinimum = 1
      fetchMaximum = 100
      displayDefault = 6
      sortOrder = count
    }
    highlight {
      fields.1 = *
      query = ###term###
      useQueryTerms = 1
      useFacetTerms = 1
      # alternateFields {
      #   transliteration = transliterationHiglight
      # }
    }
    additionalFilters {
      # 1 = type:kloster
    }
    paging {
      perPage = 20
      menu {
      #  1 = 10
      #  2 = 20
      #  3 = 50
      #  4 = 100
      }
      maximumPerPage = 1000
      detailPagePaging = 1
    }
    jumpToID = tx_find

    CSSPaths.10 = {$plugin.tx_find.settings.CSSPath}
    CSSPaths.20 = EXT:find/Resources/Public/CSS/fontello/css/fontello.css
    JSPaths.10 = {$plugin.tx_find.settings.JSPath}

    languageRootPath = {$plugin.tx_find.settings.languageRootPath}
  }

  view {
    templateRootPath = {$plugin.tx_find.view.templateRootPath}
    partialRootPath = {$plugin.tx_find.view.partialRootPath}
    layoutRootPath = {$plugin.tx_find.view.layoutRootPath}
  }
}

tx_find_page = PAGE
tx_find_page {
  typeNum = 1369315139
  10 < tt_content.list.20.find_find
  config {
    disableAllHeaderCode = 1
    additionalHeaders = Content-type:application/json;charset=utf-8
  }
}