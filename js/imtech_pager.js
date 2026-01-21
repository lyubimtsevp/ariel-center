var Imtech = {};
Imtech.Pager = function(pn, pagingContainerPath) {
    this.paragraphsPerPage = 1;
    this.currentPage = 1;
    this.pagingControlsContainer = "#pagingControls"+pn;
    this.pagingContainerPath = "#tm-cont"+pn;
    
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        
        return numPages;
    };
    
    this.showPage = function(page) {
        $(this.pagingContainerPath).hide();
        var load = $(this.pagingContainerPath).parent().find('.loaddv');
        var ynp = this.pagingContainerPath;
        load.show();

        this.currentPage = page;
        var html = "";
        for (var i = (page-1)*this.paragraphsPerPage; i < ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage; i++) {
            if (i < this.paragraphs.length) {
                var elem = this.paragraphs.get(i);
                html += "<" + elem.tagName + " class='tm-line'>" + elem.innerHTML + "</" + elem.tagName + ">";
            }
        }

        setTimeout(function() {
            load.hide();

            $(ynp).html(html);
            $(ynp).show();
        }, 500);

        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
    
    var renderControls = function(container, currentPage, numPages) {
        if(numPages<2){
            return false;
        }
        var pagingControls = "<ul class='jspaginator'>";
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls += "<li><a href='#' onclick='p"+pn+".showPage(" + i + "); return false;'>" + i + "</a></li>";
            } else {
                pagingControls += "<li><a href='#' onclick='return false;' class='active'>" + i + "</a></li>";
            }
        }
        
        pagingControls += "</ul>";
        
        $(container).html(pagingControls);
    }
}
