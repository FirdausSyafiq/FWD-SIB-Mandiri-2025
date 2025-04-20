export default function Hero() {
    return (
        <>
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Laut Bercerita</h1>
                        <p className="lead">
                            Novel "Laut Bercerita" karya Leila S. Chudori menceritakan kisah perjuangan Biru Laut, seorang aktivis mahasiswa, yang diculik dan dihilangkan paksa oleh pemerintah pada masa Orde Baru. Selain itu, novel ini juga mengisahkan perjuangan keluarga Laut, terutama adiknya Asmara Jati, dalam mencari kejelasan tentang nasibnya. 
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img
                            src="https://s3-ap-southeast-1.amazonaws.com/ebook-previews/40678/143505/1.jpg"
                            alt="Laut Bercerita Cover"
                            className="img-fluid rounded-3 shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
