const ClientCard = ({client}) => {
    return <>
        <div className="col-lg-4 col-sm-6">
            {/* <a href="#!"> */}
            <div className="bordered text-center p-xl-25 p-20 rounded">
                <img
                src={`assets/images/partners/${client.image}`}
                alt={`Partner ${client.title}`}
                />
            </div>
            {/* </a> */}
        </div>
    </>
}

export default ClientCard